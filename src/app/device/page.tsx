'use client'
import PartySocket from "partysocket";
const partySocket = new PartySocket({
  host: "localhost:1999",
  room: "my-room"
});

export default function Page() {
  const handleMessage = () => partySocket.send("Hello everyone");

  // print each incoming message from the server to console
  partySocket.addEventListener("message", (e) => {
    console.log(e.data);
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="title">My Devices Page</h1>
        <button
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-fu"
          onClick={handleMessage}
        >
          Create Message
        </button>
      </div>
    </main>
  )
}
