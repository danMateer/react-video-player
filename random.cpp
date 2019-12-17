#include "math/random.hpp"

#include <limits>

Random graphicsRandom;
Random gameRandom;

Random::Random() :
  m_generator()
{
}

void
Random::seed(int v)
{
  m_generator.seed(v);
}

int
Random::rand()
{
  std::uniform_int_distribution<int> dist(0, std::numeric_limits<int>::max() - 1);
  return dist(m_generator);
}

int
Random::rand(int v)
{
  std::uniform_int_distribution<int> dist(0, v - 1);
  return dist(m_generator);
}

int
Random::rand(int u, int v)
{
  std::uniform_int_distribution<int> dist(u, v - 1);
  return dist(m_generator);
}

float
Random::randf(float v)
{
  std::uniform_real_distribution<float> dist(0.0f, v);
  return dist(m_generator);
}

float
Random::randf(float u, float v)
{
  std::uniform_real_distribution<float> dist(u, v);
  return dist(m_generator);
}

/* EOF */
