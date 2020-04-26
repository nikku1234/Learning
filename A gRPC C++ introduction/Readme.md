A gRPC C++ introduction
link - https://medium.com/@andrewvetovitz/grpc-c-introduction-45a66ca9461f

gRPC which is short for Google RPC is an application based communication based on protocol buffers. These buffers can communicate language-anonymous (so ruby to python or C++ to Java for example).

gRPC is written in a serialization format. The base use in this tutorial with be protobuf which comes default with the gRPC in the download section below and use the .proto extension. Any serialization language can be used however.

	[sudo] xcode-select — install
	(optional) brew install autoconf automake libtool shtool
	git clone -b $(curl -L https://grpc.io/release) https://github.com/grpc/grpc
	cd grpc
	git submodule update — init
	cd grpc/third_party/protobuf
	sudo make install


