
// Define the shape of a single student object
interface Student {
  id: number;
  image: string;
}

const StudentsJoinedCard: React.FC = () => {
  // Explicitly typing the array as Student[]
  const students: Student[] = [
    { id: 1, image: "https://i.pravatar.cc/150?img=1" },
    { id: 2, image: "https://i.pravatar.cc/150?img=2" },
    { id: 3, image: "https://i.pravatar.cc/150?img=3" }
  ];

  const additionalCount: number = 500;

  return (
    <div className="flex items-center gap-3 rounded-lg py-3 w-fit">
      {/* Avatar Stack */}
      <div className="flex items-center">
        {students.map((student, index) => (
          <div
            key={student.id}
            className="relative w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-gray-700"
            style={{ 
              marginLeft: index > 0 ? "-12px" : "0", 
              zIndex: index 
            }}
          >
            <img
              src={student.image}
              alt={`Student ${student.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Additional Count Badge */}
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 border-2 border-black text-white text-xs font-semibold"
          style={{ 
            marginLeft: "-12px", 
            zIndex: students.length 
          }}
        >
          +{additionalCount}
        </div>
      </div>

      {/* Text */}
      <span className="text-white/60 text-base">
        Students joined this week
      </span>
    </div>
  );
};

export default StudentsJoinedCard;