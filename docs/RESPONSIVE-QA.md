# Responsive layout verification

All 31 public pages were checked in browser-rendered 320px phone and 768px tablet frames. The 62 checks found no document-level horizontal overflow after the responsive updates. A 375px phone preview was also used to check the mobile menu opening and closing.

Updated areas: shared header/footer, homepage hero and image controls, About layouts, leadership cards and biography dialogs, company and Licensing pages, financial highlights and charts, report tabs, horizontally scrollable shareholder table, newsroom, Foundation, contact forms, legal navigation and cookie controls.

Breakpoints retain readable body text and 16px form controls. Long headings wrap, cards stack, tables keep their own horizontal scrolling, and short landscape screens retain scrollable biography content. Navigation locks background scrolling while open and ignores height-only browser resizes.

The temporary audit route was removed after verification.

Follow-up: replaced mobile header flex sizing with a reserved 44px menu column and explicit three-line hero typography. At 320px and 430px iframe viewport widths, measured header, headline and location boundaries stay inside the content viewport. Verified menu opens at 320px. These checks cover layout and menu access; the in-app iframe preview did not render the hero photograph, so it does not verify image appearance in Chrome device emulation.
