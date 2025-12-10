export function useGsapCleanup() {
  const triggers = [];
  const tweens = [];
  const timelines = [];

  const add = (obj) => {
    if (!obj) return;

    if (obj.scrollTrigger) triggers.push(obj.scrollTrigger);

    if (obj.add) timelines.push(obj); // it's a timeline
    else tweens.push(obj);            // it's a tween
  };

  const cleanup = () => {
    triggers.forEach(t => t.kill());
    tweens.forEach(t => t.kill());
    timelines.forEach(t => t.kill());
  };

  return { add, cleanup };
}
