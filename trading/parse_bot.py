#!/usr/bin/env python3
"""Parse COMMANDO-BOT.html — extract all commands, functions, API endpoints, features."""
import re, json, sys, io
from pathlib import Path
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

src = Path(r"c:\0TEST\trading\COMMANDO-BOT.html").read_text(encoding="utf-8", errors="ignore")

# ── 1. allCommands array ──────────────────────────────────────────────
cmd_block = re.search(r"const allCommands\s*=\s*\[(.*?)\];", src, re.DOTALL)
commands = []
if cmd_block:
    for m in re.finditer(r'\{\s*cmd:\s*["\']([^"\']+)["\'].*?cat:\s*["\']([^"\']+)["\']', cmd_block.group(1), re.DOTALL):
        args_m = re.search(r'args:\s*["\']([^"\']*)["\']', m.group(0))
        hidden_m = re.search(r'hidden:\s*true', m.group(0))
        commands.append({
            "cmd": m.group(1),
            "cat": m.group(2),
            "args": args_m.group(1) if args_m else "",
            "hidden": bool(hidden_m)
        })

# ── 2. Top-level JS functions ─────────────────────────────────────────
fns = re.findall(r'(?:async\s+)?function\s+(\w+)\s*\(', src)
fn_unique = sorted(set(fns))

# ── 3. Case handlers (switch/if patterns for command routing) ─────────
case_cmds = re.findall(r"case\s*['\"]([a-z_]+)['\"]|cmd\s*===\s*['\"]([a-z_]+)['\"]|parts\[0\]\s*===\s*['\"]([a-z_]+)['\"]", src)
case_flat = sorted(set(c for grp in case_cmds for c in grp if c))

# ── 4. API / proxy endpoints ─────────────────────────────────────────
proxy_urls = re.findall(r"['\"`]https?://[^\s'\"`;,>]+", src)
proxies = sorted(set(
    u.strip("'\"`") for u in proxy_urls
    if not u.strip("'\"`").startswith("https://fonts")
    and not u.strip("'\"`").startswith("https://cdn")
    and not u.strip("'\"`").startswith("https://cdnjs")
))

# ── 5. fetch() calls with endpoint patterns ───────────────────────────
fetches = re.findall(r"fetch\s*\(\s*[`'\"]([^'\"`;]+)[`'\"]", src)

# ── 6. AI model references ────────────────────────────────────────────
models = re.findall(r"model\s*[:=]\s*['\"]([^'\"]+)['\"]", src)
models_unique = sorted(set(models))

# ── 7. Finance command handler keywords ──────────────────────────────
finance_fns = [f for f in fn_unique if any(k in f.lower() for k in
    ["heikin","broker","ticker","fund","macro","rsi","pivot","hedge","news","alert","regime","fx","calc","chart","finance","trade","signal","analysis"])]

# ── 8. System prompt / AI context ────────────────────────────────────
sys_prompt = re.search(r"const DANIEL_SYSTEM_PROMPT\s*=\s*`([^`]+)`", src)
ragbuild = re.search(r"function buildRagPrompt\s*\([^)]*\)\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}", src, re.DOTALL)

# ── 9. Unique features / special objects ─────────────────────────────
special_objects = re.findall(r"const (\w+)\s*=\s*\{", src)
special_objects = [o for o in sorted(set(special_objects)) if len(o) > 4 and o[0].isupper()]

# ── OUTPUT ────────────────────────────────────────────────────────────
print("=" * 70)
bot_path = Path(r"c:\0TEST\trading\COMMANDO-BOT.html")
print(f"COMMANDO-BOT.html  ({bot_path.stat().st_size // 1024} KB)")
print("=" * 70)

print(f"\n[1] ALL COMMANDS ({len(commands)} total)")
cats = {}
for c in commands:
    cats.setdefault(c["cat"], []).append(c)
for cat, cmds in cats.items():
    print(f"  {cat}")
    for c in cmds:
        h = " [hidden]" if c["hidden"] else ""
        print(f"    /{c['cmd']:<16} {c['args']:<25}{h}")

print(f"\n[2] CASE/SWITCH ROUTED COMMANDS ({len(case_flat)} found)")
for i, c in enumerate(case_flat):
    print(f"  {c}", end="\n" if (i+1)%8==0 else "  ")
print()

print(f"\n[3] JS FUNCTIONS ({len(fn_unique)} total)")
print(f"  Finance/trading: {finance_fns}")
print(f"  All: {fn_unique[:40]} {'...' if len(fn_unique)>40 else ''}")

print(f"\n[4] PROXY / API ENDPOINTS")
for p in proxies[:20]:
    print(f"  {p}")

print(f"\n[5] AI MODELS REFERENCED")
for m in models_unique[:15]:
    print(f"  {m}")

print(f"\n[6] SPECIAL CONFIG OBJECTS")
print(f"  {special_objects[:30]}")

print(f"\n[7] RAG / SYSTEM PROMPT")
if sys_prompt:
    sp = sys_prompt.group(1).strip()
    print(f"  Length: {len(sp)} chars")
    print(f"  First 300: {sp[:300]}")

print(f"\n[8] FETCH PATTERNS")
for f in sorted(set(fetches))[:15]:
    print(f"  {f}")

print("\n" + "=" * 70)
print("DONE")
