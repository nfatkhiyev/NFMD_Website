---
title: 'Case Study: Engineering Creativity in Tachycardia Lead Development'
description: In the dynamic world of medical device development, sometimes the most innovative solutions arise from unexpected quarters. In this article, I want to share my approach to solving a  challenging engineering problem not through high-end technology, but with creativity and affordable tools.
date: '2023-11-12'
thumbnail: images/newsletter/newsletter_2_tn.png
categories:
    - prototyping
    - laser cutting
published: true
---

Written By: Nathaniel Fatkhiyev

In the dynamic world of medical device development, sometimes the most innovative solutions arise from unexpected quarters. In this article, I want to share my approach to solving a  challenging engineering problem not through high-end technology, but with creativity and affordable tools.

Recently, I've been working with a client to developing a tachycardia lead. One of our most persistent and high priority issues we encountered was a leak between two injection molded polyurethane components. This leak was a significant hurdle, as it caused the lead to fail critical dielectric strength testing. After some investigation, we realized that the gap between the components was too large for the adhesive to seal effectively. While modifying the mold was the long-term solution, budget constraints made it impractical in the immediate term.

Modifying the mold was out of the question at the stage that we were at at the time. Because of this, an alternate solution was needed. While I can't share the intricate design details due to confidentiality, I created a simple animation to visualize the problem.

<p align="center">
<br>
<img alt="Assembly animation of polyurethane parts" align="center" width="50%" src="/images/newsletter/newsletter_2.gif">
<br>
</p>

Before I share the fully implemented solution, I want to share some of the failed solutions first. The first thing that came to mind was reflowing the two molded components together to create a thermal bond that would completely seal the two components togehter. This solution was not feasible since the complex internal geometry of the two parts could not be maintained without expensive custom mandrels. The second solution considered was using adhesive to build material ontop of the mating surfaces and then fill any remaining gap during the final bonding step. This solution did yield several good parts however this process was plagued with incosistency during it's development and implementation. At it's best we only acheived a 50% yield.

The ultimate solution, that has been fully implemented with success, was to add a thin polyurethane seal in-between the two molded components that would remove the need for them to mate perfectly. This approach had several benefits over the failed approaches: 
1. It allowed for visual inspection to ensure the seal was complete.
2. Wasn't sensitive to the amount of adhesive used to bond the two molded components together.
3. Could be manufactured quickly and cost-effectively.

Here is another animation showing the same gap sealed by the new (turquoise) seal. Notice that the gap is now blocked by the seal.

<p align="center">
<br>
<img alt="Assembly animation of polyurethane parts" align="center" width="50%" src="/images/newsletter/newsletter_2_2.gif">
<img alt="Polyurethane Seal Profile" align="center" width="50%" src="/images/newsletter/newsletter_2_3.png">
</p>

Beyond the design of this soltuion, manufacturing these seals was an adventure in itself. I used a K40 CO2 laser cutter – a surprisingly affordable yet effective tool – to cut the seals from polyurethane sheets. This process required precision and a bit of trial and error, particularly due to the material's tendency to melt around the kerf of the laser and the low quality of the XY gantry system. However, with some adjustments and patience, I was able to produce high-quality seals efficiently.

I am sharing this situation with you not only because it demonstrated my approach to solving a fitment problem effectively, but it also demonstrated the power of using simple, accessible tools in complex medical device development. This solution was an excellent example of how flexibility and creative problem-solving can significantly reduce costs and expedite the development process.

While this approach worked well for our testing phase, we're still working towards a more permanent solution. I hope this case study inspires others in the field to look at everyday tools and think creatively about how they can be applied to complex problems. It's a testament to the fact that sometimes, the simplest solutions can be the most effective.

For those interested in the more technical aspects, I've included some images and videos of the seal manufacturing process. I'm always open to discussions and questions about this project or the broader topic of innovative problem-solving in medical device development.

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
