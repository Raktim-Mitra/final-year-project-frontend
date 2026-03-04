export default function GestureTips() {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h3 className="font-semibold text-gray-700 mb-2">Gesture Guide</h3>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>✋ Open Palm → Next</li>
        <li>✊ Fist → Previous</li>
        <li>☝️ Point → Select</li>
        <li>👍 Thumbs Up → Confirm Upload</li>
      </ul>
    </div>
  );
}