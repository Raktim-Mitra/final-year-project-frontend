import FileCard from "./FileCard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FileGrid({ files }: { files: any[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {files.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </div>
  );
}