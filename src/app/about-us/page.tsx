// export default function AboutPage() {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-6">About Us</h1>
//         <p className="text-lg">
//           Welcome to White Haven Community Football Club...
//         </p>
//       </div>
//     );
//   }

// import Head from 'next/head';
// import Mission from '@/components/Mission'; // Adjust the path as needed

export default function AboutPage() {
  return (
    <>
        <title>About Us | White Haven Community Football Club</title>
        <meta
          name="description"
          content="Welcome to the White Haven Community Football Club official website. We are an established not-for-profit football club located in White Haven Park 63 Invergordon Ave Scarborough, ON, that offers free football experiences, team play and tournaments, community and networking, and free education workshops. Learn more about White Haven Community Football Club's mission, vision, goal, and board members."
        />
        <meta
          name="keywords"
          content="football, soccer, futsal, community, club, sports, Scarborough soccer, Scarborough football club, Scarborough soccer club, Scarborough White Haven soccer, Scarborough White Haven football, not-for-profit club, Scarborough youth soccer, Scarborough adult soccer, Scarborough kids soccer, local football club, GTA football, local football club, about us, mission, vision, goal"
        />
        <meta
          name="author"
          content="White Haven Community Football Club - Building a Stronger Soccer Community"
        />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg">
          Welcome to White Haven Community Football Club...
        </p>
        {/* Add other subcomponents like Vision, Goal, etc. */}
      </div>
    </>
  );
}