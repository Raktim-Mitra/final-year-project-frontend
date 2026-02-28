import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FileGrid from "../dashboard/components/FileGrid";
import FloatingUploadButton from "../dashboard/components/FloatingUploadButton";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) redirect("/");

  // Dummy files (replace with DB later)
  const files = [
    { id: "1", name: "Operating Systems", date: "12 Feb 2026" },
    { id: "2", name: "Computer Networks", date: "15 Feb 2026" },
    { id: "3", name: "DBMS", date: "18 Feb 2026" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#ECEEDF] via-white to-[#BBDCE5]/30">

      <Navbar />

      <main className="p-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Your Learning Space
          </h1>
          <p className="text-gray-500 mt-2">
            Manage and explore your uploaded academic modules
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="bg-white/80 p-6 rounded-xl shadow border">
            <h3 className="text-gray-500 text-sm">Total Files</h3>
            <p className="text-3xl font-bold text-[#8fbbc7] mt-2">
              {files.length}
            </p>
          </div>

          <div className="bg-white/80 p-6 rounded-xl shadow border">
            <h3 className="text-gray-500 text-sm">Recently Added</h3>
            <p className="text-lg font-semibold text-gray-700 mt-2">
              {files[files.length - 1]?.name}
            </p>
          </div>

        </div>

        {/* File Section */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-700">
            Your Uploaded Files
          </h2>

          <FileGrid files={files} />
        </div>

      </main>

      <FloatingUploadButton />
      <Footer />
    </div>
  );
}