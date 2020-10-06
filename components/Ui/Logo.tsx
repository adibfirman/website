import * as React from 'react'

interface LogoProps extends React.SVGAttributes<SVGSVGElement> {
  title: string
}

function Logo({ fill, width, height, style, ...rest }: LogoProps) {
  return (
    <svg style={{ isolation: 'isolate', ...style }} viewBox="38 35.221 82.794 42.25" width={width} height={height} {...rest}>
      <g>
        <g>
          <path
            d=" M 85.443 56.351 C 85.443 53.208 81.507 50.23 75.473 48.383 C 76.865 42.232 76.246 37.339 73.519 35.772 C 72.891 35.405 72.156 35.231 71.353 35.231 L 71.353 37.387 C 71.798 37.387 72.156 37.474 72.456 37.639 C 73.771 38.393 74.341 41.265 73.897 44.959 C 73.79 45.868 73.616 46.826 73.403 47.802 C 71.508 47.338 69.438 46.98 67.263 46.748 C 65.957 44.959 64.603 43.335 63.24 41.913 C 66.392 38.983 69.351 37.378 71.363 37.378 L 71.363 35.221 C 71.363 35.221 71.363 35.221 71.363 35.221 C 68.704 35.221 65.222 37.116 61.702 40.404 C 58.182 37.136 54.701 35.26 52.041 35.26 L 52.041 37.416 C 54.043 37.416 57.012 39.012 60.165 41.923 C 58.811 43.344 57.457 44.959 56.171 46.748 C 53.985 46.98 51.916 47.338 50.02 47.812 C 49.798 46.845 49.633 45.907 49.517 45.008 C 49.063 41.313 49.624 38.441 50.929 37.677 C 51.219 37.503 51.597 37.426 52.041 37.426 L 52.041 35.269 C 52.041 35.269 52.041 35.269 52.041 35.269 C 51.229 35.269 50.494 35.444 49.856 35.811 C 47.139 37.378 46.529 42.261 47.932 48.392 C 41.917 50.249 38 53.218 38 56.351 C 38 59.494 41.936 62.472 47.97 64.319 C 46.578 70.47 47.197 75.363 49.924 76.93 C 50.552 77.297 51.287 77.471 52.099 77.471 C 54.759 77.471 58.24 75.576 61.76 72.288 C 65.28 75.556 68.762 77.432 71.421 77.432 C 72.233 77.432 72.968 77.258 73.606 76.891 C 76.324 75.324 76.933 70.441 75.531 64.31 C 81.526 62.463 85.443 59.484 85.443 56.351 Z  M 72.852 49.901 C 72.494 51.148 72.049 52.434 71.547 53.721 C 71.15 52.947 70.734 52.173 70.28 51.4 C 69.835 50.626 69.361 49.872 68.887 49.137 C 70.26 49.34 71.585 49.591 72.852 49.901 Z  M 68.423 60.2 C 67.669 61.505 66.895 62.743 66.093 63.894 C 64.652 64.02 63.191 64.087 61.722 64.087 C 60.261 64.087 58.801 64.02 57.37 63.904 C 56.567 62.753 55.784 61.525 55.03 60.229 C 54.295 58.962 53.627 57.676 53.018 56.38 C 53.618 55.084 54.295 53.788 55.02 52.521 C 55.774 51.216 56.548 49.978 57.35 48.827 C 58.791 48.702 60.252 48.634 61.722 48.634 C 63.182 48.634 64.642 48.702 66.073 48.818 C 66.876 49.968 67.659 51.197 68.413 52.492 C 69.148 53.759 69.816 55.045 70.425 56.341 C 69.816 57.637 69.148 58.933 68.423 60.2 Z  M 71.547 58.943 C 72.069 60.238 72.514 61.534 72.881 62.791 C 71.614 63.101 70.28 63.362 68.897 63.565 C 69.371 62.82 69.845 62.056 70.289 61.273 C 70.734 60.5 71.15 59.716 71.547 58.943 Z  M 61.741 69.261 C 60.841 68.333 59.942 67.298 59.052 66.166 C 59.923 66.205 60.812 66.234 61.712 66.234 C 62.621 66.234 63.52 66.215 64.4 66.166 C 63.53 67.298 62.631 68.333 61.741 69.261 Z  M 54.546 63.565 C 53.173 63.362 51.848 63.111 50.581 62.801 C 50.939 61.554 51.384 60.267 51.887 58.981 C 52.283 59.755 52.699 60.529 53.154 61.302 C 53.608 62.076 54.072 62.83 54.546 63.565 Z  M 61.692 43.441 C 62.592 44.369 63.491 45.404 64.381 46.535 C 63.511 46.497 62.621 46.468 61.722 46.468 C 60.812 46.468 59.913 46.487 59.033 46.535 C 59.903 45.404 60.803 44.369 61.692 43.441 Z  M 54.536 49.137 C 54.063 49.881 53.589 50.645 53.144 51.429 C 52.699 52.202 52.283 52.976 51.887 53.75 C 51.364 52.454 50.92 51.158 50.552 49.901 C 51.819 49.601 53.154 49.34 54.536 49.137 Z  M 45.785 61.244 C 42.361 59.784 40.147 57.869 40.147 56.351 C 40.147 54.833 42.361 52.908 45.785 51.458 C 46.616 51.1 47.525 50.781 48.463 50.481 C 49.015 52.376 49.74 54.349 50.639 56.37 C 49.75 58.382 49.034 60.345 48.492 62.231 C 47.535 61.931 46.626 61.602 45.785 61.244 Z  M 50.987 75.063 C 49.672 74.309 49.102 71.437 49.546 67.743 C 49.653 66.834 49.827 65.876 50.04 64.9 C 51.935 65.364 54.005 65.722 56.18 65.954 C 57.486 67.743 58.84 69.367 60.203 70.789 C 57.051 73.719 54.092 75.324 52.08 75.324 C 51.645 75.315 51.277 75.228 50.987 75.063 Z  M 73.926 67.694 C 74.38 71.388 73.819 74.261 72.514 75.024 C 72.224 75.199 71.846 75.276 71.402 75.276 C 69.4 75.276 66.431 73.68 63.278 70.77 C 64.632 69.348 65.986 67.733 67.272 65.944 C 69.458 65.712 71.527 65.354 73.423 64.88 C 73.645 65.857 73.819 66.795 73.926 67.694 Z  M 77.649 61.244 C 76.817 61.602 75.908 61.921 74.97 62.221 C 74.419 60.325 73.693 58.353 72.794 56.332 C 73.684 54.32 74.399 52.357 74.941 50.471 C 75.898 50.771 76.807 51.1 77.658 51.458 C 81.082 52.918 83.296 54.833 83.296 56.351 C 83.287 57.869 81.072 59.794 77.649 61.244 Z "
            fill={fill}
          />
          <path d=" M 52.032 35.26 L 52.032 35.26 L 52.032 35.26 L 52.032 35.26 Z " fill={fill} />
          <circle vectorEffect="non-scaling-stroke" cx="61.71183337148091" cy="56.3509350611487" r="4.41937514305333" fill={fill} />
          <path d=" M 71.344 35.231 L 71.344 35.231 L 71.344 35.231 L 71.344 35.231 Z " fill={fill} />
        </g>
        <path
          d=" M 100.082 56.133 L 100.082 74.221 L 97.342 74.221 L 97.342 56.133 L 100.082 56.133 L 100.082 56.133 Z  M 97.111 51.231 L 97.111 51.231 L 97.111 51.231 Q 97.111 50.29 97.573 49.853 L 97.573 49.853 L 97.573 49.853 Q 98.035 49.416 98.729 49.416 L 98.729 49.416 L 98.729 49.416 Q 99.389 49.416 99.867 49.861 L 99.867 49.861 L 99.867 49.861 Q 100.346 50.307 100.346 51.231 L 100.346 51.231 L 100.346 51.231 Q 100.346 52.155 99.867 52.609 L 99.867 52.609 L 99.867 52.609 Q 99.389 53.063 98.729 53.063 L 98.729 53.063 L 98.729 53.063 Q 98.035 53.063 97.573 52.609 L 97.573 52.609 L 97.573 52.609 Q 97.111 52.155 97.111 51.231 Z  M 118.566 74.221 L 118.203 71.795 L 118.055 71.795 L 118.055 71.795 Q 116.157 74.551 112.377 74.551 L 112.377 74.551 L 112.377 74.551 Q 108.829 74.551 106.857 72.125 L 106.857 72.125 L 106.857 72.125 Q 104.885 69.699 104.885 65.227 L 104.885 65.227 L 104.885 65.227 Q 104.885 60.754 106.865 58.278 L 106.865 58.278 L 106.865 58.278 Q 108.846 55.803 112.377 55.803 L 112.377 55.803 L 112.377 55.803 Q 116.058 55.803 118.022 58.476 L 118.022 58.476 L 118.236 58.476 L 118.121 57.173 L 118.055 55.902 L 118.055 48.541 L 120.794 48.541 L 120.794 74.221 L 118.566 74.221 L 118.566 74.221 Z  M 112.724 72.257 L 112.724 72.257 L 112.724 72.257 Q 115.53 72.257 116.792 70.731 L 116.792 70.731 L 116.792 70.731 Q 118.055 69.204 118.055 65.804 L 118.055 65.804 L 118.055 65.227 L 118.055 65.227 Q 118.055 61.381 116.776 59.739 L 116.776 59.739 L 116.776 59.739 Q 115.497 58.097 112.691 58.097 L 112.691 58.097 L 112.691 58.097 Q 110.281 58.097 109.002 59.97 L 109.002 59.97 L 109.002 59.97 Q 107.723 61.843 107.723 65.26 L 107.723 65.26 L 107.723 65.26 Q 107.723 68.725 108.994 70.491 L 108.994 70.491 L 108.994 70.491 Q 110.265 72.257 112.724 72.257 Z  M 87.952 72.472 L 87.952 72.472 L 87.952 72.472 Q 87.952 71.366 88.455 70.797 L 88.455 70.797 L 88.455 70.797 Q 88.958 70.227 89.899 70.227 L 89.899 70.227 L 89.899 70.227 Q 90.856 70.227 91.393 70.797 L 91.393 70.797 L 91.393 70.797 Q 91.929 71.366 91.929 72.472 L 91.929 72.472 L 91.929 72.472 Q 91.929 73.544 91.384 74.122 L 91.384 74.122 L 91.384 74.122 Q 90.84 74.7 89.899 74.7 L 89.899 74.7 L 89.899 74.7 Q 89.057 74.7 88.504 74.18 L 88.504 74.18 L 88.504 74.18 Q 87.952 73.66 87.952 72.472 Z "
          fill={fill}
        />
      </g>
    </svg>
  )
}

export default Logo
