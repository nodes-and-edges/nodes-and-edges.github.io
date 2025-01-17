<span class="tinypinkspace">algorithms</span>

# Ising Model

The story starts in 1895 with Pierre Curie, not his famous wife Marie. Pierre discovered a fascinating phenomenon: magnets lose their magnetic properties when heated above a certain temperature, now known as the *Curie Temperature*. This discovery opened up new ways to understand the behavior of magnets, especially how they change when subjected to different conditions.

Fast forward to 1925, when physicist Ernst Ising proposed a mathematical model to study magnetism. This model, now known as the *Ising Model*, simplifies the complex interactions between tiny magnetic components, allowing scientists to better understand how these interactions lead to the behavior of a magnet.

### The Two-Dimensional Ising Model

Let's zoom in on a specific version of the Ising model: the **two-dimensional Ising model**. Imagine a grid, or lattice, where each point on the grid represents a tiny "magnet," or **spin**. These spins are either pointing "up" or "down," and they represent the magnetic behavior of the smallest elements within a material. The entire grid is a network where each point (or spin) is connected to its neighbors.

In this model, each spin can either be +1 or -1, representing an upward or downward orientation. The collection of these individual spins forms the **spin configuration**, which represents the overall state of the system.

### Energy of the System: The Hamiltonian

The key to understanding how this system behaves lies in its **energy**, often referred to as the **Hamiltonian**. The Hamiltonian tells us how the interactions between neighboring spins affect the overall energy of the system.

To calculate the energy, we look at each pair of neighboring spins. If two spins are aligned (both pointing in the same direction), the system is in a low-energy state. This is because the spins "prefer" to be aligned due to their mutual attraction. The more aligned the spins are across the entire system, the lower the overall energy will be.

However, if the spins are opposites (one pointing up, the other down), the system’s energy increases. This reflects the fact that the system "dislikes" having opposing spins next to each other, leading to a higher-energy state.

### Introducing an External Magnetic Field

To make the model more flexible, an **external magnetic field** can be added. This magnetic field interacts with each spin in the system, either encouraging them to align in a particular direction or oppose it. The field's strength can influence whether the spins tend to be aligned in a certain direction (for example, all pointing up or down) or are more randomly distributed.
