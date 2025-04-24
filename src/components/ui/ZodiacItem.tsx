import dynamic from "next/dynamic";

const AriesIcon = dynamic(
  () => import("@/components/icons/aries-svgrepo-com.svg")
);

export default function ZodiacItem() {
  return (
    <div className="p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-blue-500"
      />
    </div>
  );
}
