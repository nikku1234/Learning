# import sys
# print(str(sys.argv))

import argparse
parser = argparse.ArgumentParser()
# parser.parse_args
parser.add_argument("echo")
args = parser.parse_args()
print(args.echo)