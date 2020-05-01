# from linear_regression2 import least_squares
import sys, json #, numpy as np
# from q import f

# Read data from stdin
def read_in():
  lines = sys.stdin.readlines()
  #Since our input would only be having one line, parse our JSON data from that
  return json.loads(lines[0])

def main():
  #get our data as an array from read_in()
  # print([12321321])
  lines = read_in()
  # data = lines['data']
  # forward = int(lines['forward'])
  # arr = [[], []]
  # for i in range(0, len(data) - 1):
  #   arr[0].append(data[i])
  #   arr[1].append(data[i + 1])
  # alpha, beta = least_squares(arr[0], arr[1]) 
  # result = [data[len(data) - 1]]
  # for i in range(0, forward):
  #   result.append(predict(alpha, beta, result[i]))
  # result.pop(0)
  # print(result)
  print(lines['data'])

#start process
if __name__ == '__main__':
  main()

################################################################################
################################################################################
################################################################################
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

from basic import mean, standart_deviation, correlation

# Функция прогнозирования
def predict(alpha, beta, x_i):
  return beta * x_i + alpha

# Отклонение от наблюдаемых значений
def error(alpha, beta, x_i, y_i):
  return y - redict(alpha, beta, x_i)

# Сумма квадратичных ошибок
def sum_of_squared_errors(alpha, beta, x, y):
  arr = [error(alpha, beta, x_i, y_i) ** 2 for x,y in zip(x, y)]
  return sum(arr)

# Для нахождения alpha и betta используется Метод наименьших квадратов
def least_squares(x, y):
  beta = correlation(x, y) * standart_deviation(y) / standart_deviation(x)
  alpha = mean(y) - beta * mean(x)
  return alpha, beta

# Оценка качества подгонки - Коэффициент Детерминации
# Полная сумма квадратов
def total_sum_of_squares(y):
  return sum(y**2 for v in de_mean(y))

# r-квадрат - доля вариации зависимой переменной
def r_squared(alpha, beta, x, y):
  return 1.0 - (sum_of_squared_errors(alpha, beta, x, y)
                / total_sum_of_squares(y)
               )