import { data } from 'autoprefixer';
import { supabase } from '../services/api';

export const getPosts = async () => {
  let { data: posts, error } = await supabase
   .from('posts')
   .select('*')

  if (posts) {
    return posts;
  }

  return [];
};

export const getPostBySlug = async (id) => {
  let { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    // Filters
    .eq('id', id);
  return { posts };
};
