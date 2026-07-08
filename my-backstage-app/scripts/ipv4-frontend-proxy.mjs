#!/usr/bin/env node
/**
 * Backstage's dev frontend listens on IPv6 localhost (::1) only.
 * Cursor port forwarding uses IPv4 127.0.0.1, which then refused connections.
 * This proxy listens on 127.0.0.1:3000 and forwards to [::1]:3000.
 */
import net from 'node:net';

const LISTEN_HOST = '127.0.0.1';
const LISTEN_PORT = 3000;
const TARGET_HOST = '::1';
const TARGET_PORT = 3000;

const server = net.createServer(client => {
  const upstream = net.connect(
    { host: TARGET_HOST, port: TARGET_PORT, family: 6 },
    () => {
      client.pipe(upstream);
      upstream.pipe(client);
    },
  );
  upstream.on('error', () => client.destroy());
  client.on('error', () => upstream.destroy());
});

server.listen(LISTEN_PORT, LISTEN_HOST, () => {
  console.log(
    `IPv4 frontend proxy: http://${LISTEN_HOST}:${LISTEN_PORT} -> [${TARGET_HOST}]:${TARGET_PORT}`,
  );
});
