import { useEffect, useState } from "react";
import { confetti } from "tsparticles-confetti"
import successSong from "/success.mp3"
import failedSong from "/failed.mp3"
import useSound from "use-sound"

function getQuestion() {
  const min = 2;
  const max = 10;
  const answer = Math.floor(Math.random() * (max - min + 1) + min);
  return { answer, choices: [1, 2, 3, 4] };
}

function GameThree() {
  const [question, setQuestion] = useState({ choices: [] }) as any;
  const { answer, choices } = question as any;
  const [selected, setSelected] = useState([]) as any;
  const [result, setResult] = useState(null) as any;

  useEffect(() => {
    if (!result) setQuestion(getQuestion());
  }, [result]);

  function select(number: never) {
    setSelected([...selected, number]);
  }

  function deselect(number: never) {
    const index = selected.indexOf(number);
    if (index === -1) return;
    const newSelected = [...selected];
    newSelected.splice(index, 1);
    setSelected(newSelected);
  }

  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  }

  const lightConfetti = () => {
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 3,
      shapes: ["text"],
      shapeOptions: {
        text: {
          value: ["☀️", "🔥", "🌈", "🌞", "🌟", "⭐️"],
        },
      },
    })
  }

  const lightShoot = () => {
    setTimeout(lightConfetti, 0)
    setTimeout(lightConfetti, 100)
    setTimeout(lightConfetti, 200)
  }

  const [playSound] = useSound(successSong)
  const [playSoundFailed] = useSound(failedSong)

  function success() {
    setResult("Marina!")
    lightShoot()
    playSound()
  }

  function failed() {
    setResult("Diso!")
    playSoundFailed()
  }

  function done() {
    const selectedTotal = selected.reduce((a: any, b: any) => a + b, 0);
    selectedTotal === answer
      ? success()
      : failed();
  }

  function reset() {
    setSelected([]);
    setResult();
  }
  return (
    <div className="px-[10%] space-y-5 relative">
      <svg className="absolute -bottom-[10%] right-[63%]" width="300" zoomAndPan="magnify" viewBox="0 0 150 149.999998" height="300">
        <path fill="#bddbff"
          d="M 124.421875 67.550781 L 124.421875 82.449219 L 110.839844 84.136719 C 109.9375 87.667969 108.550781 90.996094 106.734375 94.042969 L 115.136719 104.851562 L 104.601562 115.386719 L 93.792969 106.984375 C 90.75 108.796875 87.410156 110.183594 83.890625 111.085938 L 82.203125 124.667969 L 67.300781 124.667969 C 70.027344 124.667969 72.269531 122.4375 72.269531 119.703125 L 72.269531 97.207031 C 73.09375 97.300781 73.90625 97.351562 74.75 97.351562 C 87.089844 97.351562 97.101562 87.339844 97.101562 75 C 97.101562 62.660156 87.089844 52.648438 74.75 52.648438 C 73.90625 52.648438 73.09375 52.699219 72.269531 52.792969 L 72.269531 30.296875 C 72.269531 27.5625 70.027344 25.332031 67.300781 25.332031 L 82.203125 25.332031 L 83.890625 38.914062 C 87.410156 39.816406 90.75 41.203125 93.792969 43.015625 L 104.601562 34.613281 L 115.136719 45.148438 L 106.734375 55.957031 C 108.550781 59.003906 109.9375 62.332031 110.839844 65.863281 L 124.421875 67.550781 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 139.320312 70.03125 C 139.242188 70.03125 139.195312 70.03125 139.117188 70.03125 C 136.488281 70.160156 134.355469 72.34375 134.355469 75 C 134.355469 77.65625 136.488281 79.839844 139.117188 79.96875 C 139.195312 79.96875 139.242188 79.96875 139.320312 79.96875 C 142.046875 79.96875 144.289062 77.734375 144.289062 75 C 144.289062 72.265625 142.046875 70.03125 139.320312 70.03125 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 74.75 5.464844 C 72.027344 5.464844 69.785156 7.695312 69.785156 10.429688 C 69.785156 10.507812 69.785156 10.554688 69.785156 10.632812 C 69.910156 13.261719 72.09375 15.398438 74.75 15.398438 C 77.410156 15.398438 79.59375 13.261719 79.71875 10.632812 C 79.71875 10.554688 79.71875 10.507812 79.71875 10.429688 C 79.71875 7.695312 77.476562 5.464844 74.75 5.464844 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 74.75 134.601562 C 72.09375 134.601562 69.910156 136.738281 69.785156 139.367188 C 69.785156 139.445312 69.785156 139.492188 69.785156 139.570312 C 69.785156 142.304688 72.027344 144.535156 74.75 144.535156 C 77.476562 144.535156 79.71875 142.304688 79.71875 139.570312 C 79.71875 139.492188 79.71875 139.445312 79.71875 139.367188 C 79.59375 136.738281 77.410156 134.601562 74.75 134.601562 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 44.949219 97.351562 L 44.949219 112.25 L 57.367188 112.25 C 58.734375 112.25 59.851562 111.136719 59.851562 109.769531 L 59.851562 97.351562 L 44.949219 97.351562 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 53.691406 82.449219 L 44.949219 82.449219 L 44.949219 97.351562 L 59.851562 97.351562 L 59.851562 82.449219 L 53.691406 82.449219 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 57.367188 67.550781 L 44.949219 67.550781 L 44.949219 82.449219 L 59.851562 82.449219 L 59.851562 70.03125 C 59.851562 68.664062 58.734375 67.550781 57.367188 67.550781 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 44.949219 67.550781 L 44.949219 82.449219 L 30.050781 82.449219 L 30.050781 67.550781 L 44.949219 67.550781 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 30.050781 82.449219 L 30.050781 97.351562 L 44.949219 97.351562 L 44.949219 82.449219 L 30.050781 82.449219 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 40.207031 97.351562 L 30.050781 97.351562 L 30.050781 112.25 L 44.949219 112.25 L 44.949219 97.351562 L 40.207031 97.351562 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 59.851562 97.351562 L 59.851562 109.769531 C 59.851562 111.136719 58.734375 112.25 57.367188 112.25 L 17.632812 112.25 C 16.265625 112.25 15.148438 111.136719 15.148438 109.769531 L 15.148438 70.03125 C 15.148438 68.664062 16.265625 67.550781 17.632812 67.550781 L 57.367188 67.550781 C 58.734375 67.550781 59.851562 68.664062 59.851562 70.03125 Z M 15.148438 40.230469 C 15.148438 38.863281 16.265625 37.75 17.632812 37.75 L 57.367188 37.75 C 58.734375 37.75 59.851562 38.863281 59.851562 40.230469 L 59.851562 55.132812 C 59.851562 56.5 58.734375 57.617188 57.367188 57.617188 L 17.632812 57.617188 C 16.265625 57.617188 15.148438 56.5 15.148438 55.132812 Z M 67.300781 25.332031 L 7.699219 25.332031 C 4.964844 25.332031 2.730469 27.5625 2.730469 30.296875 L 2.730469 119.703125 C 2.730469 122.4375 4.964844 124.667969 7.699219 124.667969 L 67.300781 124.667969 C 70.027344 124.667969 72.269531 122.4375 72.269531 119.703125 L 72.269531 30.296875 C 72.269531 27.5625 70.027344 25.332031 67.300781 25.332031 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 25.082031 82.449219 L 15.148438 82.449219 L 15.148438 97.351562 L 30.050781 97.351562 L 30.050781 82.449219 L 25.082031 82.449219 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 25.082031 67.550781 L 17.632812 67.550781 C 16.265625 67.550781 15.148438 68.664062 15.148438 70.03125 L 15.148438 82.449219 L 30.050781 82.449219 L 30.050781 67.550781 L 25.082031 67.550781 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#bddbff"
          d="M 15.148438 97.351562 L 15.148438 109.769531 C 15.148438 111.136719 16.265625 112.25 17.632812 112.25 L 30.050781 112.25 L 30.050781 97.351562 L 15.148438 97.351562 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 47.433594 109.769531 L 47.433594 99.835938 L 57.367188 99.835938 L 57.367188 109.769531 Z M 17.632812 99.835938 L 27.566406 99.835938 L 27.566406 109.769531 L 17.632812 109.769531 Z M 27.566406 70.03125 L 27.566406 79.96875 L 17.632812 79.96875 L 17.632812 70.03125 Z M 47.433594 84.933594 L 57.367188 84.933594 L 57.367188 94.867188 L 47.433594 94.867188 Z M 32.53125 79.96875 L 32.53125 70.03125 L 42.46875 70.03125 L 42.46875 79.96875 Z M 27.566406 94.867188 L 17.632812 94.867188 L 17.632812 84.933594 L 27.566406 84.933594 Z M 42.46875 99.835938 L 42.46875 109.769531 L 32.53125 109.769531 L 32.53125 99.835938 Z M 32.53125 94.867188 L 32.53125 84.933594 L 42.46875 84.933594 L 42.46875 94.867188 Z M 57.367188 79.96875 L 47.433594 79.96875 L 47.433594 70.03125 L 57.367188 70.03125 Z M 57.367188 65.066406 L 17.632812 65.066406 C 14.898438 65.066406 12.664062 67.296875 12.664062 70.03125 L 12.664062 109.769531 C 12.664062 112.503906 14.898438 114.734375 17.632812 114.734375 L 57.367188 114.734375 C 60.101562 114.734375 62.335938 112.503906 62.335938 109.769531 L 62.335938 70.03125 C 62.335938 67.296875 60.101562 65.066406 57.367188 65.066406 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 57.367188 55.132812 L 17.632812 55.132812 L 17.632812 40.230469 L 57.367188 40.230469 Z M 57.367188 35.265625 L 17.632812 35.265625 C 14.898438 35.265625 12.664062 37.496094 12.664062 40.230469 L 12.664062 55.132812 C 12.664062 57.867188 14.898438 60.097656 17.632812 60.097656 L 57.367188 60.097656 C 60.101562 60.097656 62.335938 57.867188 62.335938 55.132812 L 62.335938 40.230469 C 62.335938 37.496094 60.101562 35.265625 57.367188 35.265625 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 49.917969 45.199219 L 44.949219 45.199219 L 44.949219 50.164062 L 49.917969 50.164062 L 49.917969 45.199219 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 39.984375 45.199219 L 35.015625 45.199219 L 35.015625 50.164062 L 39.984375 50.164062 L 39.984375 45.199219 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 30.050781 45.199219 L 25.082031 45.199219 L 25.082031 50.164062 L 30.050781 50.164062 L 30.050781 45.199219 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 74.75 94.867188 L 74.75 55.132812 C 85.703125 55.132812 94.621094 64.046875 94.621094 75 C 94.621094 85.953125 85.703125 94.867188 74.75 94.867188 Z M 121.9375 80.269531 L 110.519531 81.683594 C 109.492188 81.800781 108.675781 82.546875 108.421875 83.546875 C 107.578125 86.796875 106.320312 89.902344 104.601562 92.753906 C 104.078125 93.65625 104.136719 94.742188 104.777344 95.566406 L 111.828125 104.65625 L 104.40625 112.078125 L 95.316406 105.023438 C 94.523438 104.382812 93.40625 104.324219 92.515625 104.851562 C 89.652344 106.566406 86.546875 107.828125 83.296875 108.671875 C 82.300781 108.925781 81.550781 109.738281 81.4375 110.757812 L 80.019531 122.183594 L 74.304688 122.183594 C 74.578125 121.417969 74.75 120.574219 74.75 119.703125 L 74.75 99.835938 C 88.441406 99.835938 99.585938 88.6875 99.585938 75 C 99.585938 61.3125 88.441406 50.164062 74.75 50.164062 L 74.75 30.296875 C 74.75 29.425781 74.578125 28.582031 74.304688 27.816406 L 80.019531 27.816406 L 81.4375 39.242188 C 81.550781 40.261719 82.300781 41.074219 83.296875 41.328125 C 86.546875 42.171875 89.652344 43.433594 92.515625 45.148438 C 93.40625 45.675781 94.523438 45.617188 95.316406 44.976562 L 104.40625 37.921875 L 111.828125 45.34375 L 104.777344 54.433594 C 104.136719 55.257812 104.078125 56.34375 104.601562 57.246094 C 106.320312 60.097656 107.578125 63.203125 108.421875 66.453125 C 108.675781 67.453125 109.492188 68.199219 110.519531 68.316406 L 121.9375 69.730469 Z M 69.785156 119.703125 C 69.785156 121.070312 68.667969 122.183594 67.300781 122.183594 L 7.699219 122.183594 C 6.332031 122.183594 5.214844 121.070312 5.214844 119.703125 L 5.214844 30.296875 C 5.214844 28.929688 6.332031 27.816406 7.699219 27.816406 L 67.300781 27.816406 C 68.667969 27.816406 69.785156 28.929688 69.785156 30.296875 Z M 124.722656 65.09375 L 112.769531 63.601562 C 112.003906 61.019531 110.984375 58.539062 109.722656 56.171875 L 117.097656 46.664062 C 117.863281 45.675781 117.792969 44.277344 116.890625 43.382812 L 106.367188 32.859375 C 105.472656 31.957031 104.058594 31.890625 103.089844 32.65625 L 93.582031 40.027344 C 91.214844 38.765625 88.730469 37.75 86.148438 36.980469 L 84.65625 25.03125 C 84.511719 23.789062 83.445312 22.847656 82.203125 22.847656 L 7.699219 22.847656 C 3.605469 22.847656 0.25 26.203125 0.25 30.296875 L 0.25 119.703125 C 0.25 123.796875 3.605469 127.152344 7.699219 127.152344 L 82.203125 127.152344 C 83.445312 127.152344 84.511719 126.210938 84.65625 124.96875 L 86.148438 113.019531 C 88.730469 112.25 91.214844 111.234375 93.582031 109.972656 L 103.089844 117.34375 C 104.058594 118.109375 105.472656 118.042969 106.367188 117.140625 L 116.890625 106.617188 C 117.792969 105.722656 117.863281 104.324219 117.097656 103.335938 L 109.722656 93.828125 C 110.984375 91.460938 112.003906 88.980469 112.769531 86.398438 L 124.722656 84.90625 C 125.964844 84.757812 126.902344 83.691406 126.902344 82.449219 L 126.902344 67.550781 C 126.902344 66.308594 125.964844 65.242188 124.722656 65.09375 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 139.320312 77.484375 C 137.953125 77.484375 136.835938 76.367188 136.835938 75 C 136.835938 73.632812 137.953125 72.515625 139.320312 72.515625 C 140.6875 72.515625 141.804688 73.632812 141.804688 75 C 141.804688 76.367188 140.6875 77.484375 139.320312 77.484375 Z M 74.75 142.054688 C 73.382812 142.054688 72.269531 140.9375 72.269531 139.570312 C 72.269531 138.203125 73.382812 137.085938 74.75 137.085938 C 76.121094 137.085938 77.234375 138.203125 77.234375 139.570312 C 77.234375 140.9375 76.121094 142.054688 74.75 142.054688 Z M 74.75 12.914062 C 73.382812 12.914062 72.269531 11.796875 72.269531 10.429688 C 72.269531 9.0625 73.382812 7.945312 74.75 7.945312 C 76.121094 7.945312 77.234375 9.0625 77.234375 10.429688 C 77.234375 11.796875 76.121094 12.914062 74.75 12.914062 Z M 146.773438 75 C 146.773438 71.605469 144.472656 68.761719 141.359375 67.871094 C 138.039062 36.757812 112.992188 11.710938 81.882812 8.394531 C 80.988281 5.277344 78.148438 2.980469 74.75 2.980469 C 71.375 2.980469 68.542969 5.261719 67.632812 8.355469 C 59.277344 9.226562 51.265625 11.625 43.804688 15.503906 L 46.09375 19.910156 C 52.925781 16.359375 60.238281 14.15625 67.882812 13.3125 C 69.019531 16 71.667969 17.878906 74.75 17.878906 C 77.816406 17.878906 80.457031 16.019531 81.601562 13.359375 C 110.207031 16.523438 133.230469 39.542969 136.390625 68.152344 C 133.734375 69.296875 131.871094 71.933594 131.871094 75 C 131.871094 78.066406 133.734375 80.703125 136.390625 81.847656 C 133.230469 110.457031 110.207031 133.476562 81.601562 136.640625 C 80.457031 133.980469 77.816406 132.121094 74.75 132.121094 C 71.667969 132.121094 69.019531 134 67.882812 136.679688 C 60.238281 135.84375 52.925781 133.640625 46.09375 130.089844 L 43.804688 134.496094 C 51.265625 138.375 59.277344 140.773438 67.632812 141.644531 C 68.542969 144.738281 71.375 147.019531 74.75 147.019531 C 78.148438 147.019531 80.988281 144.722656 81.882812 141.605469 C 112.992188 138.289062 138.039062 113.242188 141.359375 82.128906 C 144.472656 81.238281 146.773438 78.394531 146.773438 75 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 52.429688 148.71875 L 57.222656 150.007812 L 58.511719 145.207031 L 53.710938 143.925781 L 52.429688 148.71875 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 34.105469 140.433594 L 38.410156 142.917969 L 40.894531 138.609375 L 36.589844 136.125 L 34.105469 140.433594 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 90.992188 145.207031 L 92.28125 150.007812 L 97.074219 148.71875 L 95.792969 143.925781 L 90.992188 145.207031 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 108.609375 138.609375 L 111.089844 142.917969 L 115.398438 140.433594 L 112.914062 136.125 L 108.609375 138.609375 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 123.917969 127.6875 L 127.4375 131.199219 L 130.949219 127.6875 L 127.4375 124.164062 L 123.917969 127.6875 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 135.878906 113.164062 L 140.183594 115.648438 L 142.667969 111.339844 L 138.359375 108.855469 L 135.878906 113.164062 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 143.675781 96.042969 L 148.46875 97.320312 L 149.757812 92.53125 L 144.957031 91.238281 L 143.675781 96.042969 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 149.757812 57.46875 L 148.46875 52.679688 L 143.675781 53.957031 L 144.957031 58.761719 L 149.757812 57.46875 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 142.667969 38.660156 L 140.183594 34.351562 L 135.878906 36.835938 L 138.359375 41.144531 L 142.667969 38.660156 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 130.949219 22.3125 L 127.4375 18.800781 L 123.917969 22.3125 L 127.4375 25.835938 L 130.949219 22.3125 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 115.398438 9.566406 L 111.089844 7.082031 L 108.609375 11.390625 L 112.914062 13.875 L 115.398438 9.566406 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 97.074219 1.28125 L 92.28125 -0.0078125 L 90.992188 4.792969 L 95.792969 6.074219 L 97.074219 1.28125 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 58.511719 4.792969 L 57.222656 -0.0078125 L 52.429688 1.28125 L 53.710938 6.074219 L 58.511719 4.792969 "
          fill-opacity="1" fill-rule="nonzero" />
        <path fill="#ffbde9"
          d="M 40.894531 11.390625 L 38.410156 7.082031 L 34.105469 9.566406 L 36.589844 13.875 L 40.894531 11.390625 "
          fill-opacity="1" fill-rule="nonzero" />
      </svg>
      <div>
        <h1 className="fortnite text-5xl text-center lg:text-7xl lg:text-left text-primary">Kajikajy</h1>
      </div>

      <div className="lg:grid lg:grid-cols-2 relative space-y-4">
        <div data-aos="flip-up" className="text-lg lg:text-2xl 2xl:text-3xl first-letter:text-3xl lg:first-letter:text-4xl">
          Ity kilalao ity dia manampy anao hahay ny fomba ampifanampiana isa roa.
        </div>
        <div className="">
          <div className="sm:absolute bottom-0 my-5">
            {result && (
              <div className="space-y-2 text-center capitalize">
                <h1 className="text-3xl fortnite">{result}</h1>
                <button className="btn btn-success" onClick={reset}>
                  Mamerina
                </button>
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <div className="w-1/2 space-y-5">
              <div className="">
                <div className="">
                  <label className="text-2xl lg:text-4xl fortnite">Tondroy ireo isa hampifanampiana mba hanome : {answer}</label>
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="w-1/2 flex gap-2 flex-wrap">
                  {choices.map((number: never) => (
                    <button
                      key={number}
                      className="btn btn-sm"
                      onClick={() => select(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>
                <div className="w-1/2 flex gap-2 flex-wrap">
                  {selected.map((number: never, index: any) => (
                    <button
                      key={index}
                      className="btn btn-sm btn-info"
                      onClick={() => deselect(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2">
                <button className="btn btn-success text-xl" onClick={done}>
                  Tsaraina
                </button>
                <button className="btn text-xl" onClick={reset}>
                  Mamerina
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameThree