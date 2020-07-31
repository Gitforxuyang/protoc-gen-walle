

proto:
	protoc --plugin=protoc-gen-walle=./bin/protoc-gen-walle \
	--walle_out=template=service:./examples -I=./examples ukiCmsUser.proto