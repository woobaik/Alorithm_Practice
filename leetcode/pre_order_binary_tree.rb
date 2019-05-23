# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Integer[]}
def preorder_traversal(root)
    return [] unless root
    
    result = []
    result << root.value
    result += preorder_traversal(root.left)
    result += preorder_traversal(root.right)

    result
end