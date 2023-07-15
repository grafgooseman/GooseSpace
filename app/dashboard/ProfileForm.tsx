"use client";

export function ProfileForm({ user }: any) {
    const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const body = {
            name: formData.get("name"),
            bio: formData.get("bio"),
            age: formData.get("age"),
            image: formData.get("image"),
        };

        const res = await fetch("/api/user", {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });

        // await res.json();
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semiboldbold mb-4">Edit Your Profile</h2>
            <form onSubmit={updateUser} className="space-y-4 flex flex-col">
                <label htmlFor="name" className="block font-semibold">
                    Name
                </label>
                <input
                    className="border border-gray-300 rounded-md p-2"
                    type="text"
                    name="name"
                    defaultValue={user?.name ?? ""}
                />
                <label htmlFor="bio" className="block font-semibold">
                    Bio
                </label>
                <textarea
                    name="bio"
                    cols={30}
                    rows={10}
                    defaultValue={user?.bio ?? ""}
                    className="border border-gray-300 rounded-md p-2"
                ></textarea>
                <label htmlFor="age" className="block font-semibold">
                    Age
                </label>
                <input
                    type="text"
                    name="age"
                    defaultValue={user?.age ?? 0}
                    className="border border-gray-300 rounded-md p-2"
                />
                <label htmlFor="image" className="block font-semibold">
                    Profile Image URL
                </label>
                <input
                    type="text"
                    name="image"
                    defaultValue={user?.image ?? ""}
                    className="border border-gray-300 rounded-md p-2 w-200"
                />

                <button
                    className="bg-blue-500 text-white rounded-md py-2 px-4"
                    type="submit"
                >
                    Save
                </button>
            </form>
        </div>
    );
}
