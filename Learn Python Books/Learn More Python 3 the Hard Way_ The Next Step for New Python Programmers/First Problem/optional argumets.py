import argparse
parser = argparse.ArgumentParser()
parser.add_argument("--verbosity",help="increase output verbosity",action="store_true")

args = parser.parse_args()
if args.verbosity:
    print("verbosity on")
