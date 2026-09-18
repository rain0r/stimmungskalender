# Build frontend
FROM docker.io/node AS client-builder

WORKDIR /app
COPY node .
RUN npm i --no-progress --loglevel=error --no-audit --no-fund --save-exact --prefer-online --ignore-scripts \
    && npm run build

FROM debian:13-slim

WORKDIR /app

# Add the project source
COPY --exclude=node . .
COPY --from=client-builder /web/static /app/web/static/node/
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

RUN apt update \
    && apt -y install build-essential ca-certificates gettext \
    && uv sync --no-dev \
    && apt -y purge build-essential \
    && apt autoremove -y \
    && rm -rf /var/lib/apt/lists/*

ENV ALLOWED_HOSTS=[]
ENV SECRET_KEY=123456
ENV STATIC_ROOT=/app/static

COPY --chmod=775 \
    docker/app/entrypoint.sh \
    /usr/local/bin/

ENTRYPOINT ["entrypoint.sh"]
CMD ["uwsgi"]
