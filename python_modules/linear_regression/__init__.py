import sys, json, math

def read_in():
  lines = sys.stdin.readlines()
  return json.loads(lines[0])

def main():
  lines = read_in()
  print(lines['data'])

if __name__ == '__main__':
  main()