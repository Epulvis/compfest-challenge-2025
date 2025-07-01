"use server";
// ... import

export async function addMealPlan(formData: FormData) {
  // Ambil semua data dari form
  const name = formData.get('name') as string;
  const price = formData.get('price') as string;
  const description = formData.get('description') as string;
  const detailedDescription = formData.get('detailedDescription') as string;
  const image = formData.get('image') as string | null;

  // Ambil data nutrisi
  const kalori = formData.get('kalori') as string;
  const protein = formData.get('protein') as string;
  const karbo = formData.get('karbo') as string;
  const lemak = formData.get('lemak') as string;

  // ... (Validasi bisa ditambahkan di sini)

  try {
    // Simpan data menggunakan nested write
    await prisma.mealPlan.create({
      data: {
        name,
        price,
        description,
        detailedDescription,
        image,
        // Buat record Nutrition yang berelasi secara bersamaan
        nutrition: {
          create: {
            kalori,
            protein,
            karbo,
            lemak,
          },
        },
      },
    });

    revalidatePath('/menu');
    revalidatePath('/admin/dashboard');

  } catch (error) {
    // ... (Error handling)
  }
}