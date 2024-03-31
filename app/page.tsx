// app/page.tsx

import { revalidatePath } from "next/cache";

import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify-utils";

import Logout from "@/components/Logout";

async function App() {
  const user = await AuthGetCurrentUserServer();
  const { data: orders } = await cookiesClient.models.Order.list();

  async function addOrder(data: FormData) {
    "use server";
    const cashappId = data.get("cashappId") as string;
    const email = data.get("email") as string;
    await cookiesClient.models.Order.create({
      email: email,
      cashappId: cashappId,
    });
    revalidatePath("/");
  }

  return (
    <>
      <h1>Hello, Amplify 👋</h1>
      {user && <Logout />}
      <form action={addOrder}>
        <input type="text" name="cashappId" />
        <input type="text" name="email" />
        <button type="submit">Add Order</button>
      </form>

      <ul>
        {orders && orders.map((order) => <li key={order.id}>{order.email}</li>)}
      </ul>
    </>
  );
}

export default App;