# from linear_regression2 import least_squares
import sys, json, math #, numpy as np
# from q import f

# Read data from stdin
def read_in():
  lines = sys.stdin.readlines()
  #Since our input would only be having one line, parse our JSON data from that
  return json.loads(lines[0])

################################################################################

def dot(v, w):
  """Скалярное произведение - v_i * w_i + ... v_n * w_n"""
  return sum(v_i * w_i for v_i, w_i in zip(v, w))

def sum_of_squares(v):
  return dot(v, v)

def mean(x):
  """Среднее значение"""
  return sum(x) / len(x)

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

def least_squares(x, y):
  beta = correlation(x, y) * standart_deviation(y) / standart_deviation(x)
  alpha = mean(y) - beta * mean(x)
  return alpha, beta

def main():
  #get our data as an array from read_in()
  lines = read_in()
  data = lines['data']
  forward = int(lines['forward'])
  arr = [[], []]
  for i in range(0, len(data) - 1):
    arr[0].append(data[i])
    arr[1].append(data[i + 1])
  
  alpha, beta = least_squares(arr[0], arr[1]) 
  # result = [data[len(data) - 1]]
  # for i in range(0, forward):
  #   result.append(predict(alpha, beta, result[i]))
  # result.pop(0)
  # print(result)
  print([alpha, beta])

#start process
if __name__ == '__main__':
  main()