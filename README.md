# PartnerWorkshop

No hugo? Just run it via a container:
```bash
docker run --rm \
--name PartnerWorkshop \
-p 8080:8080 \
-v ${PWD}:/src \
hugomods/hugo:exts-non-root \
server -p 8080
```

