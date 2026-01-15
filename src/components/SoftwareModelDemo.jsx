import React, { useState, useRef, useEffect } from 'react';
import './SoftwareModelDemo.css';

const MOBILE_MODELS = [
    { id: 'iphone-15', name: 'iPhone 15', width: 300, height: 600, camera: 'island' },
    { id: 'samsung-s24', name: 'Samsung S24', width: 310, height: 620, camera: 'hole-punch' },
    { id: 'pixel-8', name: 'Pixel 8', width: 305, height: 610, camera: 'camera-bar' },
];

const SoftwareModelDemo = () => {
    const [elements, setElements] = useState([]);
    const [drawingMode, setDrawingMode] = useState(false);
    const [selectedElementId, setSelectedElementId] = useState(null);
    const [selectedModel, setSelectedModel] = useState(MOBILE_MODELS[0]);
    const [status, setStatus] = useState('Designing');
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    // Dragging State
    const [dragState, setDragState] = useState({
        isDragging: false,
        dragStart: { x: 0, y: 0 },
        elementStart: { x: 0, y: 0 }
    });

    // Handle Image Upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setElements([
                    ...elements,
                    {
                        id: Date.now(),
                        type: 'image',
                        content: event.target.result,
                        x: 50,
                        y: 50,
                        width: 100,
                        height: 100
                    }
                ]);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle Add Text
    const handleAddText = () => {
        const text = prompt("Enter text:");
        if (text) {
            setElements([
                ...elements,
                {
                    id: Date.now(),
                    type: 'text',
                    content: text,
                    x: 50,
                    y: 50,
                    color: '#ffffff',
                    fontSize: 20
                }
            ]);
        }
    };

    // Delete Element
    const handleDeleteElement = () => {
        if (selectedElementId) {
            setElements(elements.filter(el => el.id !== selectedElementId));
            setSelectedElementId(null);
        }
    };

    // Keyboard Delete
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Delete' || e.key === 'Backspace') {
                if (selectedElementId) handleDeleteElement();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedElementId]);


    // --- Mouse Handlers for Dragging ---

    const handleMouseDownElement = (e, id) => {
        if (drawingMode) return;
        e.stopPropagation(); // Prevent canvas drawing

        const element = elements.find(el => el.id === id);
        if (!element) return;

        setSelectedElementId(id);
        setDragState({
            isDragging: true,
            dragStart: { x: e.clientX, y: e.clientY },
            elementStart: { x: element.x, y: element.y }
        });
    };

    const handleGlobalMouseMove = (e) => {
        // 1. Handle Element Dragging
        if (dragState.isDragging && selectedElementId) {
            const dx = e.clientX - dragState.dragStart.x;
            const dy = e.clientY - dragState.dragStart.y;

            setElements(prevElements => prevElements.map(el => {
                if (el.id === selectedElementId) {
                    return {
                        ...el,
                        x: dragState.elementStart.x + dx,
                        y: dragState.elementStart.y + dy
                    };
                }
                return el;
            }));
        }

        // 2. Handle Drawing (if not dragging element)
        if (isDrawing && drawingMode) {
            draw(e);
        }
    };

    const handleGlobalMouseUp = () => {
        if (dragState.isDragging) {
            setDragState(prev => ({ ...prev, isDragging: false }));
        }
        if (isDrawing) {
            stopDrawing();
        }
    };


    // --- Drawing Logic ---

    const getCanvasCoordinates = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    const startDrawing = (e) => {
        if (!drawingMode) return;
        const { x, y } = getCanvasCoordinates(e);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.strokeStyle = '#00ffcc';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        setIsDrawing(true);
    };

    const draw = (e) => {
        if (!isDrawing || !drawingMode) return;
        const { x, y } = getCanvasCoordinates(e);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineTo(x, y);
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    // --- Output Logic ---
    const handleSave = () => {
        setStatus('Saved');
        setTimeout(() => setStatus('Processed'), 1500);
    };

    const handleExport = () => {
        setStatus('Exported');
        // Trigger print dialog to simulate sending to cutting printer
        setTimeout(() => {
            window.print();
        }, 500);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div
            className="section-container"
            onMouseMove={handleGlobalMouseMove}
            onMouseUp={handleGlobalMouseUp}
            ref={containerRef}
        >
            <h2 className="section-title">Software Model Customizer</h2>

            <div className="demo-layout">

                {/* Toolbar */}
                <div className="toolbar">
                    <div className="model-selector">
                        <label>Select Device Model:</label>
                        <select
                            value={selectedModel.id}
                            onChange={(e) => {
                                const model = MOBILE_MODELS.find(m => m.id === e.target.value);
                                setSelectedModel(model);
                            }}
                            className="model-dropdown"
                        >
                            {MOBILE_MODELS.map(m => (
                                <option key={m.id} value={m.id}>{m.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="tools-group">
                        <hr className="divider" />
                        <button className="tool-btn" onClick={handleAddText}>Add Text</button>
                        <label className="tool-btn">
                            Upload Image
                            <input type="file" hidden onChange={handleImageUpload} accept="image/*" />
                        </label>
                        <button
                            className={`tool-btn ${drawingMode ? 'active' : ''}`}
                            onClick={() => setDrawingMode(!drawingMode)}
                        >
                            {drawingMode ? 'Stop Drawing' : 'Start Drawing'}
                        </button>

                        {selectedElementId && (
                            <button className="tool-btn delete-btn" onClick={handleDeleteElement}>
                                Delete Selected
                            </button>
                        )}
                    </div>
                </div>

                {/* Canvas Area */}
                <div className="canvas-wrapper">
                    <div
                        className="phone-template"
                        style={{ width: selectedModel.width, height: selectedModel.height }}
                    >
                        {/* Camera Module (Changes based on model) */}
                        <div className={`camera-module ${selectedModel.camera}`}></div>

                        {/* Elements Layer */}
                        {elements.map(el => (
                            <div
                                key={el.id}
                                className={`draggable-element ${selectedElementId === el.id ? 'selected' : ''}`}
                                style={{
                                    left: el.x,
                                    top: el.y,
                                    position: 'absolute',
                                    color: el.color || 'white',
                                    fontSize: el.fontSize || 16,
                                    cursor: drawingMode ? 'crosshair' : 'move',
                                    zIndex: selectedElementId === el.id ? 100 : 10
                                }}
                                onMouseDown={(e) => handleMouseDownElement(e, el.id)}
                            >
                                {el.type === 'text' ? (
                                    <span style={{ pointerEvents: 'none' }}>{el.content}</span>
                                ) : (
                                    <img
                                        src={el.content}
                                        style={{ width: el.width, pointerEvents: 'none', display: 'block' }}
                                        alt="upload"
                                    />
                                )}

                                {/* Visual indicator for selection */}
                                {selectedElementId === el.id && !drawingMode && (
                                    <div className="selection-box"></div>
                                )}
                            </div>
                        ))}

                        {/* Drawing Layer */}
                        <canvas
                            ref={canvasRef}
                            width={selectedModel.width}
                            height={selectedModel.height}
                            className="drawing-layer"
                            style={{ pointerEvents: drawingMode ? 'auto' : 'none' }}
                            onMouseDown={startDrawing}
                        />
                    </div>
                </div>

                {/* Actions / Status Panel */}
                <div className="action-panel">
                    <div className="status-indicator">
                        Status: <span className={`status-${status.toLowerCase()}`}>{status}</span>
                    </div>

                    {status === 'Designing' && (
                        <button className="primary-btn" onClick={handleSave}>Save to Drive</button>
                    )}

                    {(status === 'Saved' || status === 'Processed' || status === 'Exported') && (
                        <div className="preview-message">
                            {status === 'Processed' && <p>Design processed.</p>}

                            <div className="button-group">
                                {status === 'Processed' && (
                                    <button className="primary-btn export-btn" onClick={handleExport}>
                                        Export to Machine
                                    </button>
                                )}

                                <button className="primary-btn print-btn" onClick={handlePrint}>
                                    Print Design Slip
                                </button>
                            </div>
                        </div>
                    )}

                    {status === 'Exported' && (
                        <div className="success-message">
                            <h3>Cutting Job Initiated</h3>
                            <p>Design sent to Cutting Printer.</p>
                            <button className="reset-btn" onClick={() => {
                                setStatus('Designing');
                                setElements([]);
                                const canvas = canvasRef.current;
                                const ctx = canvas.getContext('2d');
                                ctx.clearRect(0, 0, canvas.width, canvas.height);
                            }}>New Design</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SoftwareModelDemo;
