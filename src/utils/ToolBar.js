const toolbar = [
    ['bold', 'italic', 'underline', 'strike'],
    [{align: []}],

    [{ list: 'ordered' }, {list: 'bullet'} ],
    [{indent: '-1'}, {indent: '+1'} ],

/*    [{size: ['small', false, 'large', 'huge']}],
    [{header: [1,2,3,4,5,6, false]}],*/
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],

    ['clean']
]

export default toolbar;