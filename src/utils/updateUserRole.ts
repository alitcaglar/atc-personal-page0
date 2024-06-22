import clientPromise from "../lib/db";

export default async function updateUserRole(email: string, newRole: string) {
  const client = await clientPromise;
  const db = client.db(); // Veritabanı adını belirtmek isterseniz, bu fonksiyon içine veritabanı adını verebilirsiniz.

  try {
    const result = await db
      .collection("users")
      .updateOne({ email: email }, { $set: { role: newRole } });

    console.log(`${result.modifiedCount} kullanıcı güncellendi`);
  } catch (error) {
    console.error("Hata:", error);
  }
}

// Örnek kullanım
// updateUserRole("user@example.com", "admin");
