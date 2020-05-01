import sys, json, math

def read_in():
  lines = sys.stdin.readlines()
  return json.loads(lines[0])

def dot(v, w):
  return sum(v_i * w_i for v_i, w_i in zip(v, w))

def main():
  lines = read_in()
  data = lines['data']
  forward = int(lines['forward'])
  arr = [[], []]
  for i in range(0, len(data) - 1):
    arr[0].append(data[i])
    arr[1].append(data[i + 1])
  print(arr[0])

if __name__ == '__main__':
  main()