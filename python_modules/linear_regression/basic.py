import math

def dot(v, w):
  """Скалярное произведение - v_i * w_i + ... v_n * w_n"""
  return sum(v_i * w_i for v_i, w_i in zip(v, w))

def sum_of_squares(v):
  return dot(v, v)

################################################################################
# Показатели центра распределения ##############################################
################################################################################

def mean(x):
  """Среднее значение"""
  return sum(x) / len(x)

def median(v):
  """Возвращает ближайшее к средине значение"""
  n = len(v)
  sorted_v = sorted(v)
  midpoint = n // 2
  if n % 2 == 1:
    return sorted_v[midpoint]
  else:
    lo = midpoint - 1
    hi = midpoint
    return (sorted_v(lo) + sorted_v[hi]) / 2

def quantile(x, p):
  """Квантиль. Возвращает значение в x, соответствующее p-ому проценту данных"""
  p_index = int(p * len(x))
  return sorted(x)[p_index]

def mode(x):
  """Мода. Возвращает список встречающихся наиболее часто"""
  counts = Counter(x)
  max_count = max(counts.values())
  return [x_i for x_i, count in counts.iteritems()
          if count == max_count]

################################################################################
# Показатели вариации ##########################################################
################################################################################

def data_range(x):
  """Размах"""
  return max(x) - min(x)

def de_mean(x):
  """Вектор отклонений от среднего"""
  x_bar = mean(x)
  return [x_i - x_bar for x_i in x]

def variance(x):
  """Дисперсия - средняя сумма квадратов отклонений от среднего"""
  n = len(x)
  deviations = de_mean(x)
  return sum_of_squares(deviations) / (n - 1)

def standart_deviation(x):
  """Стандартное отклонение"""
  return math.sqrt(variance(x))

def interquartile_range(x):
  """Интерквартильный размах"""
  return quantile(x, 0.75) - quantile(x, 0.25)

################################################################################
# Корреляция ###################################################################
################################################################################

def covariance(x, y):
  n = len(x)
  return dot(de_mean(x), de_mean(y)) / (n - 1)

def correlation(x, y):
  stdev_x = standart_deviation(x)
  stdev_y = standart_deviation(y)
  if stdev_x > 0 and stdev_y > 0:
    return covariance(x, y) / stdev_x / stdev_y
  else:
    return 0
