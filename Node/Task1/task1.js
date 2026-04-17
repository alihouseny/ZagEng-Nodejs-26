// A. Synchronous Operations
const fs = require('fs');

try {
  fs.writeFileSync('data.txt', 'Hello! This was written synchronously.');
  const content = fs.readFileSync('data.txt', 'utf8');
  console.log('[SYNC] File content:', content);
} catch (err) {
  console.error('[SYNC] Error:', err.message);
}

// B. Asynchronous Operations
fs.writeFile('data_async.txt', 'Hello! This was written asynchronously.', (writeErr) => {
  if (writeErr) {
    console.error('[ASYNC] Write error:', writeErr.message);
    return;
  }
  fs.readFile('data_async.txt', 'utf8', (readErr, content) => {
    if (readErr) {
      console.error('[ASYNC] Read error:', readErr.message);
      return;
    }
    console.log('[ASYNC] File content:', content);
  });
});
