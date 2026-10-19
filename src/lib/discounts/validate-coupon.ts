export async function validateCoupon(code: string, amount: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/discounts/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, amount }),
    });
    if (!res.ok) throw new Error("Invalid coupon.");
    return await res.json();
  } catch (e) {
    return { valid: false, error: (e as Error).message };
  }
}
