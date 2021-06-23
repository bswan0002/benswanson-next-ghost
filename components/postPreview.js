import Link from "next/link";

export default function PostPreview({ post }) {
  const formatDate = (date) => {
    const timeRemoved = date.split("T")[0];
    const dateSplit = timeRemoved.split("-");
    const [year, month, day] = [
      dateSplit[0],
      parseInt(dateSplit[1]),
      dateSplit[2],
    ];

    const monthMap = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };

    return `${monthMap[month]} ${day}, ${year}`;
  };
  return (
    <Link href={`posts/${post.slug}`}>
      <div className="p-4 my-2">
        <h3>{post.title}</h3>
        <p className="my-2 font-normal text-gray-400">{post.custom_excerpt}</p>
        <span className="font-normal text-gray-400">
          {formatDate(post.created_at)}
        </span>
      </div>
    </Link>
  );
}
