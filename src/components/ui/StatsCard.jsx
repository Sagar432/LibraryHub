export default function StatsCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md w-72 sm:w-96 py-4 sm:py-10 text-center border border-gray-200">
      <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{value}+</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
}
