// How to make animated gradient border 👇
// https://cruip-tutorials.vercel.app/animated-gradient-border/
function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full rounded-2xl flex overflow-hidden
            bg-white/10 border border-white/20 backdrop-blur-xl shadow-lg">
      {children}
    </div>
  );
}
export default BorderAnimatedContainer;
