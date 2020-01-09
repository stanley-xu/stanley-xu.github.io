---
title: "UW Course Reviews"
date: "2019-01-08"
---

Below, I review a bunch of courses I've taken at UW. I rate them all by difficulty, usefulness, and how interesting it was.
I also highlight particular aspects of some courses when they stand out.

Thanks to my friend Jon for the [inspiration](https://jonathantsang.github.io/cs-courses/)

## Rating scale

Interesting: 💡💡💡💡💡/5

Usefulness: 🔨🔨🔨🔨🔨/5

Difficulty: 💀💀💀💀💀/5

## CS 350: Operating Systems

💡💡💡 | 🔨🔨🔨🔨🔨 | 💀💀💀

Don't be afraid of this course! I gained a deep understanding of how computers really work from working at the OS level, and it may give you the same appreciation.

You learn about threading, as sort of a prerequisite for kernel development (the OS is multi-threaded), virtual memory, caching, CPU scheduling, and filesystems.

I recommend understanding the theory before you rush to code each assignment, it'll save you time debugging. At times, the theory can be dry--try taking a step back to see what the system accomplishes in using certain implementations (curiosity really helps). If you like systems courses you'll be fine, but YMMV.

[Three Easy Pieces](http://pages.cs.wisc.edu/~remzi/OSTEP/) is a great read because it's so approachable and helps you digest the concepts (also it's free).

As for actual assignments, we had to work on parts of [OS 161](http://os161.eecs.harvard.edu/), an OS made for teaching purposes. Be prepared to spend some time familiarizing with the codebase. Always start early and leave time aside for debugging.

I had Bernard Wong and he's a fantastic professor. Lesley Istead has taught recently too and is engaging.

## CS 341: Algorithms

💡💡💡💡 | 🔨🔨🔨🔨🔨 | 💀💀💀💀

Like many CS courses, usefulness scales with difficulty. This course is super important because it solidifies your CS fundamentals: complexity, algorithm techniques, recursion, and graphs.
Plus, it teaches you important ideas like: divide-and-conquer, dynamic programming, and greedy.

I personally had a lot of trouble with the course. I had to use [CLRS](https://mitpress.mit.edu/books/introduction-algorithms-third-edition) to help me understand some topics. 
Try as many examples as you can, and understand why and how problems are solved the way they are. Try to hone your inner tutor, and record and ask any and all questions you have. If you learn well, it'll help you not just during interviews but in other CS courses.

Use TAs, the prof, assignment solutions and/or Piazza to understand how to prove correctness of algorithms. It's less formal than MATH 135/CS 245 in that it's less rigorous and they'll allow some hand-waving.

## CS 458: Computer Security and Privacy

💡💡💡💡💡 | 🔨🔨🔨 | 💀💀

It's far from a bird course, but it won't destroy you. One of my favourite 4th year courses, for these reasons:
- Assignments are incredibly interesting

  You'll likely find that you need to play "hacker" which is interesting in its own right. Each of the 4 assignments were very relevant to real world scenarios and explored many areas in security: programming exploits, web security, network/DB security.

  I especially liked the cryptography unit. We were given some theoretical crypto problems to solve, and had to implement an end-to-end encrypted messaging client!
- Diverse content

  This may be both a pro and a con but you'll cover areas at each level: software, networks, databases, cryptography, and even legal issues. Still, breadth is nice.
- Staff

  Ian Goldberg is an amazing lecturer and prof. I also got lucky with the TAs (a different one per assignment) because they were very helpful on Piazza. Don't be afraid to reach out!

I think security is important to know, but I don't think each chapter will be equally useful in terms of everyday life as a SWE. Of course, it's different if you're a sysadmin, or in research or security position.

## CS 343: Concurrent & Parallel Programming

💡💡💡 | 🔨🔨🔨🔨 | 💀💀💀💀

Concurrency is one of the most important programming focused courses in my opinion, along with CS 246. By the end of it, you'll have insight not just in concurrency, but C++, software engineering, performance testing, and maybe even testing since they're all involved during each assignment.

The course starts slow though. We used to joke about how we'd never start studying concurrency at all! You start reviewing programming concepts like control flow and push that to the limit. The course was designed well in that, learning coroutines first will help you grasp concurrency better.

The assignments are all challenging. Your score depends on how well its output matches the official solution (we were given binaries of a correct solution), or if it behaves properly. There is a *long* list of things you should and shouldn't do in your code and you *will* lose marks if you don't follow it!
uC++ is the language you have to use, so you may want to brush up your C++.

I only started to appreciate the course 3/4 of the way through because the course builds your knowledge in layers. We finished concurrency halfway and the latter half of the course was about software engineering. Surprisingly, we spent some time through topics like caching and GPUs and compilers which helps tie things in.

Peter Buhr is a great lecturer and I recommend signing up for his class if you can.

## CS 486: Intro to Artificial Intelligence

💡💡💡💡💡 | 🔨🔨🔨🔨 | 💀💀💀

A great "survey" course where you can dip your toes into the large field of AI. Not difficult mathematically, but probability will help you a lot in the latter half.

This is one of my favourite courses (top 3) because it exposed me to various parts of AI. It demystified the magic of AI and really piqued my interest consistently through the term. From smart graph algorithms (A*, iterative deepening), to game playing, to machine learning, to bayes networks, you cover a vast number of subjects.

The course is really engaging because it's easy to see the application of any theory you're taught. And each assignment allows you to practice that theory--in one of them we had to implement a connect four agent.

I recommend this to anyone who has any bit of interest in AI, or if you'd like to branch out from machine learning to other areas in AI. I found Russel & Norvig's [book](http://aima.cs.berkeley.edu/) a great supplement if you're struggling at any point. Try not to fall behind because the course is very fast paced.

## To be reviewed

CS 456: Computer Networking, CS 454: Distributed Systems
