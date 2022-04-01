# Simple - Page Monitoring 🔥

There are many techniques that can be used to check web performance, here are some techniques that we can use:

- Custom PSI ([Get Started with the PageSpeed Insights API &nbsp;|&nbsp; Google Developers](https://developers.google.com/speed/docs/insights/v5/get-started))
  
  - please check `pages.json` to listing your url will be track
  
  - you can run checker with cronjob / manually
  
  - the result will be serve in `result.json`

- You can enable perf-report for your CI to prevent regresion
  
  - [GitHub - GoogleChrome/lighthouse-ci: Automate running Lighthouse for every commit, viewing the changes, and preventing regressions](https://github.com/GoogleChrome/lighthouse-ci)
  
  - How to? [Performance monitoring with Lighthouse CI](https://web.dev/lighthouse-ci/#:~:text=Lighthouse%20CI%20is%20a%20suite,provider%20to%20run%20Lighthouse%20CI.)

- Sheet / Data Studio
  
  - GSheet with Gscript -  [Automated PageSpeed Insights - Google Sheets](https://s.id/psi-sheet)
  
  - Soon


