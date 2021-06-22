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
    <div className="my-8">
      <h3 className="mb-1 text-2xl">{post.title}</h3>
      <p className="mb-1 font-normal text-gray-400">{post.custom_excerpt}</p>
      <span className="font-normal text-gray-400">
        {formatDate(post.created_at)}
      </span>
    </div>
  );
}
