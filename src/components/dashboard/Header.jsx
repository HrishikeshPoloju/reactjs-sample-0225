export default function Header({ profileUrl }) {
  return (
    <header className="bg-[#194A8D] text-white flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <img src="/logo192.png" alt="logo" className="h-10" />
        <h1 className="text-xl font-semibold">TasksBoard</h1>
      </div>
      {profileUrl ? (
        <img src={profileUrl} alt="profile" className="rounded-full h-10 w-10 object-cover" />
      ) : (
        <div className="rounded-full h-10 w-10 bg-gray-300 animate-pulse" />
      )}
    </header>
  );
}
