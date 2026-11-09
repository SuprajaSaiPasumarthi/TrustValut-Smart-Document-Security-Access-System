# Threat Model – TrustVault

## 1. Unauthorized Document Access
**Threat:** A user may try to access another user's private document.

**Protection:** Verify document ownership on the backend before allowing access.

**Test:** Log in as User A and attempt to access User B's document.

## 2. Insecure Direct Object Reference (IDOR)
**Threat:** An attacker may change a document ID in a URL to access another document.

**Protection:** Check authorization for every document request.

**Test:** Change the document ID and verify that access is denied.

## 3. Privilege Escalation
**Threat:** A normal user may attempt to access administrator functions.

**Protection:** Enforce role-based authorization on the backend.

**Test:** Attempt to access an administrator endpoint as a normal user.

## 4. Unauthorized Document Sharing
**Threat:** A user may share documents without permission.

**Protection:** Validate ownership and sharing permissions before creating a share.

**Test:** Attempt to share another user's document.

## 5. Audit Log Tampering
**Threat:** A user may attempt to modify or delete audit records.

**Protection:** Restrict audit log access and prevent ordinary users from modifying records.

**Test:** Attempt to modify or delete an audit record as a normal user.

## 6. Password Attacks
**Threat:** Attackers may try to obtain passwords from stored account data.

**Protection:** Hash passwords using bcrypt and never store plaintext passwords.

**Test:** Verify that stored passwords are hashed.