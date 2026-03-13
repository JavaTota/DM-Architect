import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Profile</h1>
          <p className="mt-2 text-slate-400">
            Manage your account and view your campaign activity.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border border-slate-800 bg-slate-800 p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-600 text-3xl font-bold">
                JT
              </div>

              <h2 className="mt-4 text-2xl font-semibold">Jahvantè Tota</h2>
              <p className="mt-1 text-slate-400">jomigone@gmail.com</p>

              <button className="mt-6 rounded-xl bg-violet-600 px-5 py-3 font-medium hover:bg-violet-500">
                Edit Profile
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-800 p-6 lg:col-span-2">
            <h3 className="text-2xl font-semibold">About</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Dungeon Master, worldbuilder, and developer building immersive
              campaign experiences with AI-powered tools.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Campaigns Created</p>
                <p className="mt-2 text-3xl font-bold">12</p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Sessions Planned</p>
                <p className="mt-2 text-3xl font-bold">34</p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">NPCs Generated</p>
                <p className="mt-2 text-3xl font-bold">89</p>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-800 p-6">
          <h3 className="text-2xl font-semibold">Account Settings</h3>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Display Name
              </label>
              <input
                type="text"
                defaultValue="Jahvantè Tota"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Email
              </label>
              <input
                type="email"
                defaultValue="jomigone@gmail.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-violet-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm text-slate-400">Bio</label>
              <textarea
                rows={4}
                defaultValue="Dungeon Master, worldbuilder, and developer building immersive campaign experiences with AI-powered tools."
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button 
              onClick={() => navigate(-1)}
              className="rounded-xl bg-violet-600 px-6 py-3 font-medium hover:bg-violet-500">
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Profile