import MouseButtonSection from "@/comp/MouseButtonSection";



document.addEventListener("mousedown", function(event) {
    if (event.button == 0) {
        Input.mouse_left = true;
    }
    if (event.button == 1) {
        Input.mouse_middle = true;
    }
    if (event.button == 2) {
        Input.mouse_right = true;
    }
});
export default function Home() {
  return (
    <>
    <MouseButtonSection />
    </>
  );
}
