'use client'

import type { Snippet } from "@prisma/client";

interface SnipettEditFormProps {
snippet: Snippet;
}

function SnippetEditForm({snippet}: SnipettEditFormProps) {
    return ( <>{snippet.code} {snippet.id} {snippet.title}</> );
}

export default SnippetEditForm;