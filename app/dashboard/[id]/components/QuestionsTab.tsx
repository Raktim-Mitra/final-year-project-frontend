// export default function QuestionsTab() {
//   return (
//     <div className="mt-8 py-16 flex flex-col items-center justify-center border border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
//       <span className="text-2xl mb-3">📝</span>
//       <h3 className="text-sm font-medium text-gray-900">Questions</h3>
//       <p className="text-sm text-gray-500 mt-1">This feature is currently under development.</p>
//     </div>
//   );
// }

export default function QuestionsTab() {
  return (
    <div className="text-center py-20 bg-white rounded-xl border shadow-sm">
      <span className="text-4xl mb-4 block">📝</span>
      <h3 className="text-lg font-bold text-gray-800 mb-2">Question Generation</h3>
      <p className="text-gray-500 mb-6">
        This feature is currently under development. Soon, you&apos;ll be able to generate quizzes based on your modules.
      </p>
      <button
        disabled
        className="bg-gray-200 text-gray-400 px-6 py-2 rounded-lg cursor-not-allowed"
      >
        Coming Soon
      </button>
    </div>
  );
}