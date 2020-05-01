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