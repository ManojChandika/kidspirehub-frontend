export const metadata = {
  title: 'Blogs – KidspireHub',
  description: 'Learning tips and updates (coming soon).',
};

export default function BlogsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-3xl border bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600 text-white flex items-center justify-center shadow-lg">
          <span className="text-2xl">📝</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">Blogs</h1>
        <p className="text-gray-600">Our blog is under development. We’ll soon share learning strategies, worksheet ideas, and platform updates.</p>
        <p className="mt-2 text-gray-500">Come back soon!</p>
      </div>
    </main>
  );
}


