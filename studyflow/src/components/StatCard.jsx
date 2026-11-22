
function StatCard({ title, value, description, icon }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{title}</p>
        <span className="text-2xl">{icon}</span>
      </div>

      <h2 className="mt-3 text-3xl font-bold text-[#743d45]">
        {value}
      </h2>

      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}

export default StatCard;
