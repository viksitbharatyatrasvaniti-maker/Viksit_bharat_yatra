"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Heading1,
    Heading2,
    Quote,
    Undo,
    Redo,
    Code
} from 'lucide-react';

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-100 bg-gray-50/50 sticky top-0 z-10 backdrop-blur-sm">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive('bold') ? 'bg-gray-200 text-black' : 'text-gray-600'}`}
                title="Bold"
            >
                <Bold className="w-5 h-5" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive('italic') ? 'bg-gray-200 text-black' : 'text-gray-600'}`}
                title="Italic"
            >
                <Italic className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-gray-300 mx-1" />
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200 text-black' : 'text-gray-600'}`}
                title="Heading 1"
            >
                <Heading1 className="w-5 h-5" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-black' : 'text-gray-600'}`}
                title="Heading 2"
            >
                <Heading2 className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-gray-300 mx-1" />
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive('bulletList') ? 'bg-gray-200 text-black' : 'text-gray-600'}`}
                title="Bullet List"
            >
                <List className="w-5 h-5" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive('orderedList') ? 'bg-gray-200 text-black' : 'text-gray-600'}`}
                title="Ordered List"
            >
                <ListOrdered className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-gray-300 mx-1" />
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive('blockquote') ? 'bg-gray-200 text-black' : 'text-gray-600'}`}
                title="Quote"
            >
                <Quote className="w-5 h-5" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={`p-2 rounded-lg hover:bg-gray-200 transition-colors ${editor.isActive('codeBlock') ? 'bg-gray-200 text-black' : 'text-gray-600'}`}
                title="Code Block"
            >
                <Code className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-gray-300 mx-1" />
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                className="p-2 rounded-lg hover:bg-gray-200 text-gray-600 disabled:opacity-50 transition-colors"
                title="Undo"
            >
                <Undo className="w-5 h-5" />
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                className="p-2 rounded-lg hover:bg-gray-200 text-gray-600 disabled:opacity-50 transition-colors"
                title="Redo"
            >
                <Redo className="w-5 h-5" />
            </button>
        </div>
    );
};

interface EditorProps {
    content: string;
    onChange: (content: string) => void;
}

const Editor = ({ content, onChange }: EditorProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Start writing your experience... (Select text for formatting)',
            }),
        ],
        content: content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'prose prose-lg prose-blue max-w-none focus:outline-none min-h-[300px] px-8 py-6 text-gray-900 prose-p:text-gray-900 prose-headings:text-gray-900',
            },
        },
        immediatelyRender: false // Fix for hydration mismatch in Next.js
    });

    return (
        <div className="w-full bg-white">
            <MenuBar editor={editor} />
            <div className="max-h-[600px] overflow-y-auto">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default Editor;
