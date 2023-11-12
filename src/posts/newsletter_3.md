---
title: 'Case Study: How to Keep Development Alive with Creative Prototyping'
description: Description
date: '2023-11-12'
thumbnail: images/newsletter/newsletter_2_tn.png
categories:
    - prototyping
    - laser cutting
published: true
---

Lately I have been working for a customer developing a tachycardia lead. One of the problems that I have been trying to solve has been leak that exists between two polyurethane components that are bonded together with adhesive. This leak is causing the lead to fail the required dielectric strength testing.

Both of the polyurethane parts are injection molded. Unfortunatly, after some investigative work, it was determined that the gap between the two components is a little bit too large for the adhesive to fill and reliably seal. Since the mold modification required to reduce the size of the gap is metal-safe, that will be the long term solution to this problem.

Since the mold modification currently exceeds the allowable budget until we hit our next development milestone, I needed to find a way to fill this gap and seal the junction without the mold modification.

Now while I can't share many of the juicy design details due to their confidential I quickly made a crude animation of how these two parts mate to each other and the gap that must be filled:

<p align="center">
<br>
<img alt="Assembly animation of polyurethane parts" align="center" width="50%" src="/images/newsletter/newsletter_2.gif">
<br>
</p>

The groove and notch that are highlighed at the end of the animation is where the leak develops and where the fit of the components will eventuall be altered.

In the mean time, I had to find a way to stop this leak without modifying the mold. 

If anybody reading this is from the catheter industry, you may be wondering why I dont just add a small sliver of polyurethan in the groove and reflow the components to thermally bond them together. Unfortunately this was not possible since the inside of components has a rather complex geometry that would be difficult to maintain without some expensive custom mandrels.

Another obvious approach would be to use adhesive that has a filler material to fill the gap. I did try this solution and maybe stuck with it for longer than I should have. Unfortunately what I found was that the formation of the leak was highly dependent on the amount of adhesive that I was able to add. Since neither myself or any of the operators that were going to be assembling this product could consistently control the amount of adhesive added, I decided to move on from this solution. Before you discredit my efforts, remember that for implantable medical devices the library of adhesives that can be used without question is rather small so I was limited to only a couple of adhesives to try this method with. None of them solved our issues with consistency.

The solution that I have implented to fix this lead is simple yet effective. I decided to add a thin polyurethane seal around the outside of the red part. Here is the same animation with the added seal in a turquoise color and the profile of the seal afterwards:

<p align="center">
<br>
<img alt="Assembly animation of polyurethane parts" align="center" width="50%" src="/images/newsletter/newsletter_2_2.gif">
<img alt="Polyurethane Seal Profile" align="center" width="50%" src="/images/newsletter/newsletter_2_3.png">
</p>

This worked really well for several reasons but these are the big three:
1. We are able to visually inspect each unit to guarantee that the seal has fully sealed the gap ensuring that there won't be any leaks.
2. The installation of the seal is not very sensitive to the amount of adhesive used and can be verified with aforementioned visual inspection.
3. I was able to manufacture this component myself decreasing the cost and the lead time significantly.

My ability to manufacture this component was one of the beggest reason that this was the solution that was implemented. It is also a great example of utilizing simple intro level tools to accelerate the development process. 

To manufacture these seals, I decided that I would utilize a laser cutter to cut them out of a sheet.  Having decided the means of manufacturing, I needed to find the raw material. I was able to find 0.015" polyurethane sheets on McMaster-Carr which would work up until our next development milestone. The number one requirement for the raw material was that it was a polyurethane that was compatible with the adhesive being used.

Once I had the raw material, I started working on the actual cutting of the seals. As I mentioned before, I decided to use a laser cutter to cut the seals. I knew that this was going to be a little bit tricky due to the material and dimensions of the seal. Small thin TPU parts tend to be difficult to cut with a laser since they will melt if the laser heats the material too much. Additionally, the small size and thin walls demand precise motions.

The laser cutter that I used to make these parts is known as the K40 CO2 laser cutter. It is a $500 40W laser cutter. I spent a considerable amount of time determining how to best control the XY system in order to maximize it's precision. I also had to find the right settings that would make a clean cut with a thin kerf. Setting everything up was definitely an iterative process that took a little over a day.

Once everything was set up, it took me another day to find the best way to fixture the material in the laser and start manufacturing lots of 100 seals. Since these parts are never to be used in anything but testing samples, the dimensional accuracy of the parts was their most important attribute and was acheived after some minor process tweaking.

What I hope to convey in this case study is that inexpensive tools and processes can be used effectifely in medical device development despite the small size and unique materials that are required. By having an open mind to technologies used accross industries the high cost and lead time associated with medical device development can be drastically reduced. I hope that it is obvious that while the solution in this case study is no where near acceptable for anything beyond the lab, it will certainly allow my customer and myself to contine attribute testing and process development while we develop the final solution at the same time.

Below are some images and video of how the seals were manufactured. Please feel free to reach out with any questions!

<p align="center">
<br>
<video alt="Laser Cutting" src="/images/newsletter/newsletter_2_7.mp4" controls="controls" style="max" width="50%"></video>
<br>
<br>
<img alt="Seals Array" align="center" width="40%" src="/images/newsletter/newsletter_2_4.jpg">
<img alt="Seals Before Processing" align="center" width="40%" src="/images/newsletter/newsletter_2_5.jpg">
<br>
<br>
<img alt="Final Sealse" align="center" width="50%" src="/images/newsletter/newsletter_2_6.jpg">
</p>

Written By: Nathaniel Fatkhiyev
