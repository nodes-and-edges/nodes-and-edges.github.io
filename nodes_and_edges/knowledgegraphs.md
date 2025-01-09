<!--
```{blogpost}
---
tags: tools, visualisation
title: title Layered graph drawing with the Sugiyama Framework
author: Christina
category: blog
date: 2024-10-20
---
tags: tools, visualisation
title: title Layered graph drawing with the Sugiyama Framework
author: Christina
category: blog
date: 2024-10-20
```
--> 

<span class="tinypinkspace">knowledge graph, tutorial</span>

# Knowledge Graphs from Text

<!--
|Author|Date|Category|
|---|---|---|
|Christina|2024-10-20|blog|
-->

<!-- every paragraph should start with a summary sentence -->
<!-- 800 words -->

## Welcome

Let's go, let's create some knowledge graphs from publications.

* Nodes: "entities" extracted with Named Entity Recognition (NER)
* Edges: "relations" extracted with Relation Classification (RC)


Things we need:
* Publications, we can search for them on PubMed.
* Visualisation tools.



## Other tutorials I used:
* Building a Knowledge Base from Texts (https://www.nlplanet.org/course-practical-nlp/02-practical-nlp-first-tasks/16-knowledge-graph-from-text)
* Construct a biomedical knowledge graph with NLP (https://towardsdatascience.com/construct-a-biomedical-knowledge-graph-with-nlp-1f25eddc54a0)


## Tools:
* Text preprocessing: Natural Language Toolkit (NLTK)
* Named entity recognition: BERN2, PubTator 3.0 with AIONER
* Relation extractor: zero-shot relation extractor (zero_shot_re)


```{mermaid}
flowchart LR
	NLTK --> NER --> Relation extractor
```


```{mermaid}
graph LR
  a --> b
```


```{mermaid}
graph LR
	NLTK --> NER --> Relation extractor
```



### Text preprocessing


Tool: Natural Language Toolkit (NLTK)


### Named entity recognition (NER)

Servers: 
* BERN2
* PubTator 3.0 with AIONER


### Relation extractor

I used the code for zero-shot relation extractor based on the paper Exploring the zero-shot limit of FewRel from https://github.com/fractalego/zero-shot-relation-extractor/tree/main/zero_shot_re
pip install didn't work, so in the end I just copied the codes from extractor.py and model.py.

Model: https://github.com/fractalego/fewrel_zero_shot



### Construct Knowledge Base (KB)



### Plot Knowledge Base (KB)


## References
```{bibliography}
:filter: docname in docnames
```